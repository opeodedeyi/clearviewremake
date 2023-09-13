<template>
    <div class="main-popup" @click="closePopup">
        <div class="main-popup-content" @click="doNothing">
            <div class="popup-header">
                <div class="popup-header-left">
                    <p class="popup-fullname">{{fullname}}</p>
                    <p class="popup-role">{{role}}</p>
                </div>
                <img class="popup-header-cancel" src="~/assets/svg/cancel.svg" alt="" @click="closePopup"/>
            </div>
            <div class="popup-body">
                <p class="popup-body-text">{{bio}}</p>
            </div>
            <div class="popup-linkedin"> <div class="popup-linkedin-logo" @click="goToLinkedin(linkedin)">Follow on Linkedin <img src="~/assets/svg/linkedinicon.svg" alt="" /></div> </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fullname: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        linkedin: {
            type: String,
            required: false,
            default: "https://www.linkedin.com/company/clearview-research-ltd/"
        }
    },
    methods: {
        closePopup() {
            this.$emit("close-popup", this.objId);
        },
        doNothing(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        goToLinkedin(link) {
            var anchor = document.createElement('a');
            anchor.href = link;
            anchor.target="_blank";
            anchor.click();
        }
    }
}
</script>

<style scoped>
.main-popup {
    position: fixed;
    transition: 1ms ease-in-out;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.72);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.main-popup-content {
    background-color: var(--color-company);
    color: var(--color-white);
    width: 100%;
    max-width: 1139px;
    height: 100%;
    max-height: 500px;
    border-radius: 20px;
    cursor: default;
    padding: 62px 100px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
}

.popup-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 40px;
}

.popup-fullname {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 31px;
}

.popup-role {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    margin-top: 15px;
}

.popup-header-cancel {
    cursor: pointer;
}

.popup-body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 0px;
    flex: 1;
}

.popup-body-text {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 245%;
}

.popup-linkedin {
    margin-top: 40px;
}

.popup-linkedin-logo {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 220px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--color-company-dark);
    cursor: pointer;
}

@media only screen and (max-width: 1080px) {
    .popup-fullname {
        font-size: 22px;
        line-height: 23px;
    }

    .popup-role {
        font-size: 15px;
        line-height: 15px;
        margin-top: 13px;
    }

    .popup-body-text {
        font-size: 16px;
        line-height: 220.5%;
    }
}

@media only screen and (max-width: 600px) {
    .popup-header {
        margin-bottom: 60px;
    }

    .main-popup-content {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0;
        padding: 50px 30px;
    }

    .popup-body-text {
        font-size: 15px;
        line-height: 220.5%;
    }
}
</style>