import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import './SameServices.css';
import SingleSlide from '../../components/ServicesSlider/SingleSlide';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/Utilities/ScrollToTop';
import PaginationCom from '../../components/PaginationCom/PaginationCom';
import { useGlobalContext } from '../../context/FuncProvider';

const SameServices = () => {
  const { service_type } = useParams();
  const { checkCase } = useGlobalContext();
  const [currentServices, setCurrentServices] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [serviceOffset, setServiceOffset] = useState(0); // serviceOffset => index of the first service
  const servicesPerPage = 9;

  useEffect(() => {
    const getCurrentServices = () => {
      const data = sliderData.find(
        (services) => services.serviceType === checkCase(service_type)
      );
      const specificKey = Object.keys(data)[2];
      const specificServices = data[specificKey];
      specificServices && setCurrentServices(specificServices);
    };
    getCurrentServices();
  });

  useEffect(() => {
    const endOffset = serviceOffset + servicesPerPage; // endOffset => index of the last servcie
    setActiveServices(currentServices.slice(serviceOffset, endOffset));
    setPageCount(Math.ceil(currentServices.length / servicesPerPage));
  }, [currentServices, serviceOffset, servicesPerPage]);

  return (
    <>
      <ScrollToTop>
        <TopNav />
        <CategoryNav />
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">{checkCase(service_type)}</h3>
            <p className="same-services-avilable">
              {`${currentServices.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {activeServices.map((service) => {
              return (
                <SingleSlide
                  key={service.id}
                  {...service}
                  sliderTitle={checkCase(service_type)}
                />
              );
            })}
          </div>
          <PaginationCom
            activeServices={activeServices}
            pageCount={pageCount}
            serviceOffset={serviceOffset}
            setServiceOffset={setServiceOffset}
            servicesPerPage={servicesPerPage}
          />
        </div>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default SameServices;