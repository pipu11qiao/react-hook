## The Component Lifecycle

* Mounting

    * **constructor()**
    * static getDerivedStateFromProps()
    * **render()**
    * **componentDidMount()**

* Updating

    * static getDerivedStateFromProps()
    * componentShouldUpdate()
    * **render()**
    * getSnapshotBeforeUpdate()
    * **componentDidUpdate()**
        is invoked immediately after updating occurs. This method is not called for the initial render.


* Unmounting

    * **componentWillUnmount()**

* Error Handling

    * static getDerivedStateFromError()
    * componenntDidCatch()

#### Other APIs

* setState()
* forceUpdate

#### Class Properties

* defaultProps
    This is used for undefined props, but not for null props. 
* displayName

#### Instance Properties

* props
* state

