export const STATUS = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

export const isPending = status => status === STATUS.PENDING
export const isResolved = status => status === STATUS.RESOLVED
export const isRejected = status => status === STATUS.REJECTED

export const formatExecutorFn = resolve => {
  return typeof resolve === 'function' ? resolve : e => e
}

export const isPromiseType = x => typeof x.then === 'function'
