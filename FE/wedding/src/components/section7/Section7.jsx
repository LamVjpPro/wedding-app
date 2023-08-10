import React from "react";
import "./Section7.css";

const Section7 = () => {
  return (
    <section id="section7">
      <div class="container guest-wrap" data-aos="flip-down">
        <div class="col-12">
          <div class="contact-title text-center">
            <h2>Tham dự cùng chúng tôi nhé?</h2>
            <p>
              Sự hiện diện của quý vị chính là niềm vui của gia đình chúng tôi.
            </p>
            <p>Rất hân hạnh được đón tiếp.</p>
          </div>
        </div>
        <div class="contact-form form-style">
          <div role="form" id="form" lang="en-US" dir="ltr">
            <form
              id="wedding-form"
              action="#"
              method="POST"
              class="form invalid"
              novalidate="novalidate"
              data-status="invalid"
            >
              <div>
                <input type="hidden" name="_wpcf7" value="230" />
                <input type="hidden" name="_wpcf7_version" value="5.6.4" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input type="hidden" name="_wpcf7_unit_tag" value="form" />
                <input type="hidden" name="_wpcf7_container_post" value="7" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                <input
                  type="hidden"
                  name="_wpcf7_recaptcha_response"
                  value=""
                />
              </div>
              <div class="container">
                <div class="avatar-upload">
                  <div class="avatar-edit">
                    <input
                      type="file"
                      id="readUrl"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label for="readUrl">
                      <i class="fas fa-pen"></i>
                    </label>
                  </div>
                  <div class="avatar-preview">
                    <img
                      id="uploadedImage"
                      src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                      alt="Uploaded Image"
                      accept="image/png, image/jpeg"
                      //   style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;"
                      data-name="upload"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <div class="form-control-wrap" data-name="name">
                    <input
                      id="username"
                      type="text"
                      name="name"
                      value=""
                      size="40"
                      class="form-control text-control validates-as-required valid"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Tên của bạn"
                    />
                    <small></small>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="form-control-wrap" data-name="phone">
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      value=""
                      size="40"
                      class="form-control text-control validates-as-required valid"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Số điện thoại"
                    />
                    <small></small>
                  </div>
                </div>
                <div class="col col-sm-6">
                  <span class="form-control-wrap" data-name="number">
                    <select
                      name="number"
                      class="form-control select-control validates-as-required valid"
                      aria-required="true"
                      aria-invalid="false"
                    >
                      <option value="1">Tệp đính kèm</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </span>
                </div>
                <div class="col col-sm-6">
                  <span class="form-control-wrap" data-name="event">
                    <select
                      name="event"
                      class="form-control select validates-as-required form-control valid"
                      aria-required="true"
                      aria-invalid="false"
                    >
                      <option value="All">Tất cả sự kiện</option>
                      <option value="1">Nạp Tài</option>
                      <option value="2">Tiệc cưới</option>
                      <option value="3">Thành hôn</option>
                    </select>
                  </span>
                </div>
                <div class="col-md-12">
                  <span class="form-control-wrap" data-name="greetings">
                    <span>Bạn có lời chúc nào cho chúng tôi không?</span>
                    <textarea
                      id="greetings"
                      // style="margin-top: 5px"
                      name="greetings"
                      cols="40"
                      rows="10"
                      class="form-control textarea validates-as-required contact-textarea valid"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Bạn có thể cho chúng tôi một lời chúc không?"
                    ></textarea>
                    <small></small>
                  </span>
                </div>
                <div class="col-md-12 text-center input-row">
                  <input
                    id="submit-form"
                    type="submit"
                    value="Gửi Lời Tham Gia"
                    class="form-control has-spinner submit submit"
                  />
                  <span class="spinner"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
