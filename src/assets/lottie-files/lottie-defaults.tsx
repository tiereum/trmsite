
export interface LottieOptions {
    loop: boolean;
    autoplay: boolean;
    animationData: Object;
    renderSettings: {
        preserveAspectRatio: boolean;
    }
}

export const defaultOpts : LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: {},
    renderSettings: {
        preserveAspectRatio: true
    }
}