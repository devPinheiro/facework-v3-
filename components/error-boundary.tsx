import React, { Component, ReactNode } from 'react'

interface errorProps{
  props: ReactNode;
  state: {
    hasError: Boolean;
  }
}
export default class ErrorBoundary extends React.Component {
    constructor(props: errorProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      //@ts-ignore
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      //@ts-ignore
      return this.props.children;
    }
  }