import { Component } from "react";
import PropTypes from "prop-types";
import "./ErrorBoundary.scss";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    fallBack: PropTypes.element,
  };

  static defaultProps = {
    fallBack: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  handleRetry = () => {
    this.state = {
      hasError: false,
      error: null,
    };
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallBack) {
        return this.props.fallBack;
      }
      return (
        <div className="error-container">
          <h1 className="error-title">Something wrong</h1>
          <p className="error-message">
            {this.state.error?.message || "Inexpected error"}
          </p>
          <button className="retry-button" onClick={this.handleRetry}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
