import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <section class="section-sub-header">
      <div class="elementor-background-overlay"></div>
      <div class="elementor-widget-wrap">
        <div class="welcome-area">
          <div class="welcome-content">
            <h2 data-aos="slide-right">
              Chào mừng bạn đến với ngày trọng đại của chúng tôi
            </h2>
            <p data-aos="flip-up">
              Chào bạn, vào ngày 08:30 Ngày 05/08/2023 mình tổ chức hôn lễ. Vì
              điều kiện ở xa, mình không thể trực tiếp đến gửi thiệp mời. Do đó,
              mình đành phải gửi lời mời tới bạn bằng cách này. Rất mong ngày đó
              bạn dành ít thời gian đến tham dự đám cưới của tụi mình. Sự hiện
              diện của bạn chính là niềm hạnh phúc lớn nhất. Cám ơn và mong bạn
              thông cảm!
            </p>
            <div class="btn">
              <a href="#section6" class="btn">
                Tham gia
              </a>
            </div>
            <div class="btn">
              <button
                type="button"
                class="bank"
                data-toggle="modal"
                data-target="#bankInfo"
              >
                Phong Bao Điện Tử
              </button>
            </div>
            <div class="btn">
              <a href="#section3" class="popup-gmaps-button">
                Địa điểm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
