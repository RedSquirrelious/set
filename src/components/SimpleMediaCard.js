import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { withTheme } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import ButtonBase from 'material-ui/ButtonBase'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'



function SimpleMediaCard(props) {
    const { classes, image } = props
    const myImage =  props.card.url
    console.log('props in simple media card', props)
    return (
        <div
        // key={prop.key}
        >
            <ButtonBase
                focusRipple
                key={props.card.id}
                className={classes.image}
                style={{
                    width: 100,
                }}
            >   
            <span
                    className={styles.imageSrc}
                    style={{
                        backgroundImage: `url(${props.card.url})`,
                    }}
                />
                <span className={styles.imageBackdrop} />
                
            
            </ButtonBase>
        </div>
    )
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SimpleMediaCard)