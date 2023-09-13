<template>
    <div class="video-jumbotron">
        <video autoplay loop muted playsinline>
            <source src="~/assets/videos/main-video2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="video-jumbotron-overlay">
            <div class="jumbo-over-empty mb"></div>
            <h1 class="jumbo-over-header">Leverage <br> the power of <br> <span class="special-header">Research</span></h1>
            <div class="jumbo-over-explanation">Giving minority audiences and those who often go unheard a voice, <br class="desk"> and providing organisations the opportunity to hear them</div>
            <UtilityButton type="link" to="/expertise" size="medium">Learn More</UtilityButton>
        </div>
    </div>
</template>

<style scoped>
.mb {
    margin-bottom: 50px;
}

.video-jumbotron {
    position: relative;
    height: 878px;
}

.video-jumbotron video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.video-jumbotron-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 83px 78px 83px 188px;
}

.jumbo-over-empty::before {
    content: "";
    height: 32px;
}

.jumbo-over-header {
    width: 100%;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 75px;
    line-height: 77px;
    color: var(--color-white);
    margin-bottom: 17px;
}

.special-header {
    color: var(--color-danger);
    font-size: 100px;
    line-height: 103px;
}

.jumbo-over-explanation {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 34px;
    color: var(--color-white);
    margin-bottom: 30px;
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .desk {
        display: none;
    }

    .video-jumbotron {
        height: 617px;
    }

    .video-jumbotron-overlay {
        align-items: center;
        padding: 100px 30px;
    }

    .jumbo-over-header {
        font-size: 35px;
        line-height: 36px;
        text-align: center;
        margin-bottom: 6px;
    }

    .special-header {
        font-size: 60px;
        line-height: 62px;
    }

    .jumbo-over-explanation {
        font-size: 12px;
        line-height: 169.7%;
        margin-bottom: 20px;
        text-align: center;
    }
}

@media only screen and (max-width: 280px) {
    .special-header {
        font-size: 50px;
    }
}
</style>