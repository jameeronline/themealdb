import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiPlayCircle } from "react-icons/bi";

export default function DetailSlider({ item, alt }) {
  return (
    <>
      <swiper-container
        pagination="true"
        navigation="true"
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-pagination-color": "red",
        }}
        effect="fade"
        crossFade="true"
        // grap-cursor="true"
        // cube-effect-shadow="true"
        // cube-effect-slide-shadows="true"
        // cube-effect-shadow-offset="20"
        // cube-effect-shadow-scale="0.94"
      >
        <swiper-slide>
          <div className="mb-8 md:mb-14 relative">
            <BiPlayCircle className="w-16 h-16 md:w-32 md:h-32 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 absolute fill-white hover:opacity-50 drop-shadow-lg" />
            <LazyLoadImage
              src={item}
              alt={alt}
              // className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
              className="w-full rounded-xl aspect-[16/8] object-cover"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="mb-8 md:mb-14 relative">
            <BiPlayCircle className="w-16 h-16 md:w-32 md:h-32 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 absolute fill-white hover:opacity-50 drop-shadow-lg" />
            <LazyLoadImage
              src={item}
              alt={alt}
              // className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
              className="w-full rounded-xl aspect-[16/8] object-cover"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="mb-8 md:mb-14 relative">
            <BiPlayCircle className="w-16 h-16 md:w-32 md:h-32 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 absolute fill-white hover:opacity-50 drop-shadow-lg" />
            <LazyLoadImage
              src={item}
              alt={alt}
              // className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
              className="w-full rounded-xl aspect-[16/8] object-cover"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="mb-8 md:mb-14 relative">
            <BiPlayCircle className="w-16 h-16 md:w-32 md:h-32 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 absolute fill-white hover:opacity-50 drop-shadow-lg" />
            <LazyLoadImage
              src={item}
              alt={alt}
              // className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
              className="w-full rounded-xl aspect-[16/8] object-cover"
            />
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
