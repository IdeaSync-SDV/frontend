import { cva } from "class-variance-authority"

const variants = cva("", {
  variants: {
    color: {
      primary: "text-gray-900",
      blue: "text-blue-900 font-medium",
      error: " text-red-500",
    },
  },
  defaultVariants: {
    color: "primary",
  },
})

const Text = ({ className, color, children }) => (
  <p className={variants({ color, className })}>{children}</p>
)

export default Text
