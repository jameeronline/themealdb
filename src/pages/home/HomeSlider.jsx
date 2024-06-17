import HomeBanner from "./HomeBanner";
export default function HomeSlider() {
  return (
    <>
      <swiper-container>
        <swiper-slide>
          <HomeBanner />
        </swiper-slide>
        <swiper-slide>
          <HomeBanner />
        </swiper-slide>
        <swiper-slide>
          <HomeBanner />
        </swiper-slide>
        <swiper-slide>
          <HomeBanner />
        </swiper-slide>
      </swiper-container>
    </>
  );
}
