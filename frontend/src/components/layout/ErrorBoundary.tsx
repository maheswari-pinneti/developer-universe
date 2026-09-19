import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[GLOBAL ERROR BOUNDARY CATCH]:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-mono">
          <div className="max-w-md w-full bg-zinc-950 border border-emerald-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">DEVELOPER UNIVERSE ANOMALY</h2>
              <p className="text-xs text-zinc-400">
                A non-fatal rendering boundary exception occurred.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl text-[11px] text-zinc-400 text-left overflow-auto max-h-32">
              <code>{this.state.error?.message || 'Unknown render exception'}</code>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={this.handleReload}
                className="flex-1 py-3 bg-emerald-500 text-black font-bold text-xs rounded-xl flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>RELOAD</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex-1 py-3 bg-zinc-900 border border-zinc-800 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>GO HOME</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
