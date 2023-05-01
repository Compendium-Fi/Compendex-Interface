import { LoadingOverlay, createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
    },
}));

const Loading = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <LoadingOverlay
                overlayBlur={2}
                loaderProps={{ size: "lg", color: "teal", variant: "bars" }}
                overlayOpacity={0.3}
                overlayColor="#c5c5c5"
                visible
            />
        </div>
    );
};

export default Loading;
