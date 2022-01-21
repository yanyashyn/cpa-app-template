type Type = "labelS" | "labelM" | "labelL" | "headerS" | "headerM" | "headerL";

export const typeStyle = (type: Type) => {
  switch (type) {
    case "labelS":
      return { "font-size": "12px" };
    case "labelM":
      return { "font-size": "16px" };
    case "labelL":
      return { "font-size": "18px" };
    case "headerS":
      return { "font-size": "12px", "font-weight": 600 };
    case "headerM":
      return { "font-size": "16px", "font-weight": 600 };
    case "headerL":
      return { "font-size": "24px", "font-weight": 600 };
  }
};
