import * as React from 'react'
import { connect } from 'react-redux'
import { WithStyles, withStyles } from '@material-ui/core'
import { appStyles } from './app-styles'
import QrReader from 'react-qr-reader'

export interface _AppFieldProps {
}

export interface _AppDispatchProps {
}

interface _AppProps extends _AppFieldProps, _AppDispatchProps, WithStyles<typeof appStyles> {}

interface _AppState {
    result: string
}

class _App extends React.Component<_AppProps, _AppState> { 
    constructor(props: _AppProps) {
        super(props)
        this.state = { result: 'NO RESULT' }
        this.handleError = this.handleError.bind(this)
        this.handleScan = this.handleScan.bind(this)
    }

    handleError = (err: any) => {
        console.error(err)
    }

    handleScan = (data: string | null) => {
        if (data) { this.setState({ result: data }) }
    }

    render() {
        const { classes } = this.props
        const { result } = this.state
        return (
            <div className={classes.root} >
                <div className={classes.qrReader} >
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                </div>
                <p className={classes.qrOutput}>Output: {result}</p>
            </div>
        )
    }
}

const App = withStyles(appStyles)(_App)

function mapStateToProps(state: any) {
    return { rates: state.exchangeRates }
}

export default connect(mapStateToProps)(App)