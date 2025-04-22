export const getCurrentScreenSize = () => {
  const width = window.innerWidth;
  if (width < 395) return "xxs";
  if (width >= 395 && width < 640) return "xs";
  if (width >= 640 && width < 768) return "sm";
  if (width >= 768 && width < 1024) return "md";
  if (width >= 1024 && width < 1280) return "lg";
  if (width >= 1280 && width < 1536) return "xl";
  if (width >= 1536 && width < 2000) return "2xl";
  return "3xl";
};

export const handleCopy = (
  color,
  setCopiedColor,
  setShowMessage,
  showMessage,
) => {
  navigator.clipboard.writeText(color);
  setShowMessage(!showMessage); // Trigger the showMessage state in the child
  setCopiedColor(color);

  setTimeout(() => {
    setCopiedColor(null);
    setShowMessage(false);
  }, 2500);
};

export const isDarkColor = (bgColor) => {
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance <= 0.5;
};

export const paddingClass = "px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20";

export const secHeading =
  "text-5xl tracking-[-0.025em] sm:text-6xl lg:text-7xl font-light capitalize";
