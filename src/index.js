import { create } from './create'
import { run } from './run'

const createWrapper = () => {
  if ('undefined' === typeof window) {
    return null;
  }
  if (!window.Worker) {
    return null
  }
  if (!(window.URL.createObjectURL || window.webkitURL.createObjectURL)) {
    return null
  }
  return { create, run }
}

const WorkerWrapper = createWrapper()

export default WorkerWrapper
