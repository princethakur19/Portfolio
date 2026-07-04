import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "grab",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    decel: 0.98,
    maxSpeed: 0.018,
    minSpeed: 0.006,
  },
};

function renderCustomIcon(icon) {
  return renderSimpleIcon({
    icon,
    bgHex: "#f8fafc",
    fallbackHex: "#0ea5e9",
    minContrastRatio: 1.4,
    size: 46,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (event) => event.preventDefault(),
    },
  });
}

export function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isActive = true;

    fetchSimpleIcons({ slugs: iconSlugs }).then((icons) => {
      if (isActive) setData(icons);
    });

    return () => {
      isActive = false;
    };
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map(renderCustomIcon);
  }, [data]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
