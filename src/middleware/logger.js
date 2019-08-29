const logger = store => next => action => {
    console.group(action.type)
	    console.log(`Action: ${action}`)
	    const output = next(action)
	    console.log(`New State: ${store.getState()}`)
    console.groupEnd()
    return output
}

export default logger