import { createStyles, Theme } from '@material-ui/core'
import { amber, purple } from '@material-ui/core/colors'

export const styles = (theme: Theme) =>
    createStyles({
        success: {
            backgroundColor: purple[600]
        },
        error: {
            backgroundColor: theme.palette.error.dark
        },
        info: {
            backgroundColor: theme.palette.primary.dark
        },
        warning: {
            backgroundColor: amber[700]
        },
        icon: {
            fontSize: 20,
            opacity: 0.9,
            marginRight: theme.spacing(1)
        },
        message: {
            display: 'flex',
            alignItems: 'center'
        }
    })

export type Styles = typeof styles