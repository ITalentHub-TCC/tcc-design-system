import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",

  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },

  variants: {
    variant: {
      salmon: {
        "&:focus": {
          outline: 0,
          borderColor: "$salmon300",
        },
      },

      blue: {
        "&:focus": {
          outline: 0,
          borderColor: "$blue300",
        },
      },

      purple: {
        "&:focus": {
          outline: 0,
          borderColor: "$purple300",
        },
      },

      yellow: {
        "&:focus": {
          outline: 0,
          borderColor: "$yellow300",
        },
      },

      green: {
        "&:focus": {
          outline: 0,
          borderColor: "$green300",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "green",
  },
});

export type TextAreaProps = ComponentProps<typeof TextArea>;

TextArea.displayName = "TextArea";
