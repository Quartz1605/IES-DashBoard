import * as React from "react"

import {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function _genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}