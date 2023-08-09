import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <section id="section2">
      <div class="container">
        <div class="row">
          <div class="title-heading" data-aos="fade-up">
            <div class="wishes">
              <h2>Cặp đôi</h2>
              <i class="far fa-heart"></i>
            </div>
          </div>
        </div>
        <div class="couple-wrap animate-box">
          <div class="couple-half" data-aos="fade-up-right">
            <div class="groom">
              <img
                src="https://res.cloudinary.com/dxy2muzyb/image/upload/v1689156365/wedding/section2/yt61ihoiw84mvjfvaoj5.jpg"
                alt="groom"
                class="img-responsive"
              />
            </div>
            <div class="desc-groom">
              <h3>Lê Hà</h3>
              <p>
                Không ngờ được! đó là câu nói tôi hay nói từ khi chúng tôi bắt
                đầu yêu và giờ thì... chúng tôi kết hôn rồi. Trải qua nhiều biến
                cố trong chuyện tình cảm tôi khá dè dặt khi lại 1 lần nữa bước
                chân vào cuộc sống của anh. Và rồi... "Chốt thôi" ❤️❤️
              </p>
            </div>
          </div>
          <p class="heart text-center">
            <i class="fas fa-heart"></i>
          </p>
          <div class="couple-half" data-aos="fade-up-left">
            <div class="bride">
              <img
                src="https://res.cloudinary.com/dxy2muzyb/image/upload/v1689156407/wedding/section2/sjbpdyo2grqpop4x0ok0.jpg"
                alt="groom"
                class="img-responsive"
              />
            </div>
            <div class="desc-bride">
              <h3>Tiến Tùng</h3>
              <p>
                Ngoại trừ người đó là em! Không hiểu sao anh hôm đấy lại mạnh
                dạn đến thế, có lẽ là vì một nửa của anh rồi. Người con gái của
                anh, chúng mình cùng xây nên một mái ấm hạnh phúc em nhé! ❤️❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
