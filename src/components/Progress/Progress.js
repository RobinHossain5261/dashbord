import { useTheme } from "next-themes";
import "./progress.css";

const Progress = (props) => {
  const { bgcolor, completed } = props;
  const { resolvedTheme, setTheme } = useTheme();

  const containerStyles = {
    height: 6,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };
  return (
    <div style={containerStyles}>
      <div className="run" style={fillerStyles}>
        {/* <span>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default Progress;
