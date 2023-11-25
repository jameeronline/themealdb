import PropTypes from "prop-types";

import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function Share({ title, url, hashtags }) {
  return (
    <>
      <ul className="flex items-center justify-center gap-10">
        <li>
          <EmailShareButton
            subject={title}
            body={url}
            className="flex items-center gap-4"
          >
            <EmailIcon size={32} round={true} />
            Share on Email
          </EmailShareButton>
        </li>
        <li>
          <TwitterShareButton
            title={title}
            url={url}
            hashtags={hashtags}
            className="flex items-center gap-4"
          >
            <TwitterIcon size={32} round={true} />
            Share on Twitter
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton
            title={title}
            url={url}
            hashtags={hashtags}
            className="flex items-center gap-4"
          >
            <FacebookIcon size={32} round={true} />
            Share on Facebook
          </FacebookShareButton>
        </li>
        <li>
          <WhatsappShareButton
            title={title}
            url={url}
            hashtags={hashtags}
            className="flex items-center gap-4"
          >
            <WhatsappIcon size={32} round={true} />
            Share on WhatsApp
          </WhatsappShareButton>
        </li>
      </ul>
    </>
  );
}

Share.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hashtags: PropTypes.array.isRequired,
};
