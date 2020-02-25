import colors from '../../../styles/colors';

const Thumbnail = ({ title, icon, children }) => (
  <div className="thumbnail-container">
    <div className="thumbnail-header">
      <div className="thumbnail-icon">{icon}</div>
      <div>{title}</div>
    </div>
    <div className="thumbnail-content">{children}</div>

    <style jsx>{`
      .thumbnail-container {
        padding: 1em 1em 2em 1em;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
      }

      .thumbnail-header {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: larger;
        color: ${colors.smartData};
        border-bottom: 2px solid ${colors.smartData};
      }

      .thumbnail-icon {
        margin-right: 0.5em;
      }

      .thumbnail-content {
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 1em;
        font-weight: bold;
        font-size: larger;
        color: #8393a7;
      }
    `}</style>
  </div>
);

export default Thumbnail;
