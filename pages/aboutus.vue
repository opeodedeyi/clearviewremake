<script setup>
useHead({
    title: 'About Us / ClearView Research',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'You can’t make a great decision, without a Clear View',
        }
    ]
})
</script>

<template>
    <div class="aboutus">
        <div class="aboutus-title">
            <h4 class="aboutus-title-intro">You can’t make a great decision, without a Clear View</h4>
            <div class="aboutus-title-sub">
                <div class="aboutus-title-hl"></div>
                <p class="aboutus-title-explain">Our insights solve complicated business challenges while also benefiting society as a whole.</p>
            </div>
        </div>
        <div class="aboutus-image"></div>
        <div class="aboutus-content">
            <div class="aboutus-content-hl mbhl"></div>
            <p class="aboutus-content-text">We are leaders in conducting participatory research and community-based research.</p>
            <p class="aboutus-content-subtext">We have successfully delivered projects across four continents for public and not-for-profit sectors, government, and businesses. We are a very experienced and knowledgeable agency in using co-creative and collaborative approaches to deliver research projects with, and on the behalf of the people of interest for our projects.</p>
            <p class="aboutus-content-endtext">We work best with organisations who give a damn - and want to make a genuine impact.</p>
            <div class="aboutus-content-hl mthl"></div>
        </div>
        <div class="aboutus-statement">
            <div class="aboutus-statement-text">
                <p class="mission-title">OUR VISION</p>
                <p class="mission-text">A world where communities that have been traditionally marginalised or underrepresented are equitably represented in research & have the power and agency to influence decision making</p>
                <p class="vision-title">OUR MISSION</p>
                <p class="vision-text">To provide decision makers with the insights and expertise they need to make better decisions through research, evaluation, strategy and engagement.</p>
            </div>
            <div class="aboutus-statement-image"></div>
        </div>
    </div>
</template>

<style>
.aboutus {
    margin-top: 138px;
}

.mbhl {
    margin-bottom: 66px;
}

.mthl {
    margin-top: 66px;
}

.aboutus-title-hl {
    width: 100%;
    height: 1px;
    background-color: var(--color-danger);
    margin-bottom: 31px;
    margin-top: 50px;
}

.aboutus-title {
    padding: 73px 200px 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.aboutus-title-intro {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
    flex: 1;
    margin-right: 60px;
}

.aboutus-title-sub {
    width: 330px;
}

.aboutus-title-explain {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
}

.aboutus-image {
    background-image: url('images/aboutus.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 511px;
    width: 100%;
}

.aboutus-content {
    padding: 125px 235px 115px;
}

.aboutus-content-hl {
    height: 1px;
    background-color: var(--color-danger);
    width: 100%;
}

.aboutus-content-text {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 166.5%;
    margin-bottom: 46px;
}

.aboutus-content-subtext {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 166.5%;
}

.aboutus-content-endtext {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 166.5%;
    margin-top: 46px;
}

.aboutus-close {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.aboutus-statement {
    width: 100%;
    min-height: 500px;
    background-color: var(--color-company);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.aboutus-statement-text {
    padding: 100px 160px 100px 180px;
    flex: 1;
}

.mission-title,
.vision-title {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 193.7%;
    letter-spacing: 0.075em;
    color: var(--color-danger);
    margin-bottom: 11px;
}

.mission-text,
.vision-text {
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 205.7%;
    color: var(--color-white);
}

.mission-text {
    margin-bottom: 65px;
}

.aboutus-statement-image {
    height: cover;
    width: 40%;
    background-image: url('images/about.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@media only screen and (max-width: 1350px) {
    .aboutus-title {
        padding: 73px 120px 100px;
    }

    .aboutus-content {
        padding: 125px 200px 115px;
    }

    .aboutus-statement-text {
        padding: 100px 120px 100px 120px;
    }
}

/* important screen */
@media only screen and (max-width: 1080px) {
    .mbhl {
        margin-bottom: 38px;
    }

    .mthl {
        margin-top: 52px;
    }

    .aboutus {
        margin-top: 110px;
    }

    .aboutus-title {
        padding: 53px 30px 70px;
        flex-direction: column;
    }

    .aboutus-title-intro {
        font-size: 45px;
        line-height: 128.5%;
        margin-right: 0;
    }

    .aboutus-title-sub {
        width: 100%;
    }

    .aboutus-title-hl {
        margin-bottom: 26px;
        margin-top: 44px;
    }

    .aboutus-title-explain {
        font-size: 15px;
        line-height: 227.7%;
    }

    .aboutus-content {
        padding: 60px 30px 48px;
    }

    .aboutus-content-text {
        font-size: 20px;
        line-height: 175.5%;
        margin-bottom: 12px;
    }

    .aboutus-content-subtext {
        font-size: 15px;
        line-height: 181.5%;
    }

    .aboutus-content-endtext {
        font-size: 20px;
        line-height: 175.5%;
        margin-top: 12px;
    }

    .aboutus-statement {
        flex-direction: column;
    }

    .aboutus-statement-text {
        padding: 64px 30px 74px;
        flex: 1;
    }

    .mission-title,
    .vision-title {
        font-size: 12px;
        margin-bottom: 8px;
        text-align: center;
    }

    .mission-text,
    .vision-text {
        font-size: 22px;
        text-align: center;
    }

    .mission-text {
        margin-bottom: 55px;
    }

    .aboutus-statement-image {
        width: 100%;
        height: 352px;
        background-image: url('images/about-mobile.png');
    }
}

@media only screen and (max-width: 600px) {
    .aboutus-image {
        height: 381px;
        background-image: url('images/aboutus-mobile.png');
    }

    .aboutus-statement-image {
        background-image: url('images/about-mobile.png');
    }
}

@media only screen and (max-width: 320px) {
    .aboutus-title-intro {
        font-size: 34px;
        line-height: 128.5%;
        margin-right: 0;
    }
}
</style>
