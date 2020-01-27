import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { Z_BLOCK } from 'zlib'

export const appStyles = createStyles({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '20px',
    },
    title: {
        flexGrow: 1,
        padding: '16px',
        paddingLeft: '24px'
    },
    qrReader: {
        display: 'block',
        margin: 'auto',
        width: '100%',
        height: '100%',
        maxWidth: 500,
        maxHeight: 500
    },
    qrOutput: {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        paddingTop: 20
    }
})