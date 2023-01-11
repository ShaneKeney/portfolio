import ProIntro from "../src/component.lib/ProIntro";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const IndexImage = () => {
  return (
    <Layout>
      <div className="section started" id="section-started">
        {/* background */}
        <div
          className="video-bg"
          style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
        >
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <ProIntro />
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexImage;
