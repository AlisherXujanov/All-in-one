const logger = store => {
  store.subscribe((mutation, state) => {
    console.log('Mutation:', mutation)
    console.log('State after mutation:', state)
  })
}

export default logger
