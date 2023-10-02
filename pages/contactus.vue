<script setup>
    import { ref } from 'vue';
    const formElement = ref(null);

    useHead({
        title: 'Contact Us / ClearView Research',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Whether you’d like to discuss a project or say hi, we always love to hear from you',
            }
        ]
    })

    const errorMessage = ref(null);
    const form = ref({
        name: null,
        subject: null,
        email: null,
        message: null
    });

    const submitForm = () => {
        if (!form.value.name || !form.value.subject || !form.value.message) {
            errorMessage.value = "please make sure your 'fullname', 'subject', and 'message' fields are filled";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.value.email)) {
            errorMessage.value = "please fill in a valid 'email'";
        } else if (form.value.message.length < 3) {
            errorMessage.value = "please add some more context to the 'message'";
        } else {
            console.log(form.value);
            formSubmit();
        }
    };

    const formSubmit = () => {
        const formElement = document.querySelector('form');
        formElement.submit();
    };
</script>

<template>
    <div class="contact">
        <div class="contact-title">
            Contact Us
        </div>
        <div class="contact-image-cont">
            <div class="contact-empty-color desk"></div>
            <div class="contact-image"></div>
        </div>
        <div class="contact-body">
            <div class="contact-body-form">
                <p class="gen-title">Whether you’d like to discuss a project or say hi, we always love to hear from you.</p>
                <div class="gen-hl"></div>
                <p v-if="errorMessage" class="contact-error">{{ errorMessage }}</p>
                <form action="https://formsubmit.co/info@clearviewresearch.co.uk" method="POST" ref="formm">
                    <input type="hidden" name="_next" value="https://www.clearviewresearch.co.uk/contactus" />
                    <input type="hidden" name="_captcha" value="false" />
                    <UtilityMainInput name="Name" placeholder="Full Name" inputType="text" controlType="input" v-model="form.name"/>
                    <UtilityMainInput name="Subject" placeholder="Subject" inputType="text" controlType="input" v-model="form.subject"/>
                    <UtilityMainInput name="Email" placeholder="Email Address" inputType="email" controlType="input" v-model="form.email"/>
                    <UtilityMainInput name="Message" placeholder="Tell us anything" inputType="textarea" controlType="textarea" v-model="form.message"/>
                    <div class="empty-height"></div>
                    <UtilityButton type="btn" size="medium" :onClick="submitForm">Send Message</UtilityButton>
                </form>
            </div>
            <div class="contact-body-information">
                <p class="gen-title">Contact <br class="desk">Information</p>
                <div class="gen-hl"></div>
                <div class="contact-address">
                    <div class="contact-address-logo">
                        <img src="~/assets/svg/locationicon.svg" class="contact-logo-color" alt="" />
                    </div>
                    <div class="contact-address">
                        <p>Clearview Research Ltd,<br> 86-90 Paul Street,<br class="mob"> London,<br class="desk"> EC2A 4NE</p>
                    </div>
                </div>
                <div class="gen-hl"></div>
                <p class="contact-connect-title">Connect with us</p>
                <ul class="contact-social">
                    <li class="contact-social-item mrico"><a href="https://www.instagram.com/cvr_insights/"><img src="~/assets/svg/instagramicon.svg" alt="" /></a></li>
                    <li class="contact-social-item mlrico"><a href="https://twitter.com/CVR_Insights"><img src="~/assets/svg/twittericon.svg" alt="" /></a></li>
                    <li class="contact-social-item mlrico"><a href="https://www.facebook.com/CVR.Insights/"><img src="~/assets/svg/facebookicon.svg" alt="" /></a></li>
                    <li class="contact-social-item mlico"><a href="https://www.linkedin.com/company/clearview-research-ltd/"><img src="~/assets/svg/linkedinicon.svg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.desk {
    display: flex;
}

.mob {
    display: none;
}

.mlrico {
    margin: 0 7px;
}

.mlico {
    margin-left: 7px;
}

.mrico {
    margin-right: 7px;
}

.empty-height {
    height: 10px;
}

.contact {
    margin-top: 138px;
    width: 100%;
}

.contact-title {
    width: 100%;
    padding: 70px 78px 80px;
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.contact-image-cont {
    width: 100%;
    height: 455px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}

.contact-empty-color {
    width: 200px;
    background-color: var(--color-company)
}

.contact-image {
    background-image: url('/images/contactus.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    height: 100%;
}

.contact-body {
    width: 100%;
    padding: 57px 166px 84px 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: var(--color-company);
}

.contact-error {
    color: var(--color-danger);
    margin-bottom: 30px;
}

.contact-body-form {
    flex: 1;
    margin-right: 60px;
    max-width: 642px;
    margin-bottom: 0;
}

.gen-title {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 126%;
    color: var(--color-white);
}

.gen-hl {
    height: 1px;
    background-color: var(--color-danger);
    margin: 44px 0 50px;
}

.contact-body-information {
    width: 341px;
}

.contact-address {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.contact-address-logo {
    margin-right: 31px;
    height: 27px;
    margin-top: 10px;
}

.contact-address-logo img {
    height: 100%;
}

.contact-address {
    color: var(--color-white);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 187.7%;
}

.contact-connect-title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 187.7%;
    color: var(--color-white);
    margin-bottom: 19px;
}

.contact-social {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
}

.contact-social-item {
    text-decoration: none;
    list-style: none;
}

@media only screen and (max-width: 1200px) {
    .contact-body {
        padding: 57px 78px 84px 200px;
    }
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .desk {
        display: none;
    }

    .mob {
        display: flex;
    }

    .empty-height {
        height: 7px;
    }

    .contact {
        margin-top: 110px;
        width: 100%;
    }

    .contact-title {
        width: 100%;
        padding: 40px 30px 60px;
        font-size: 45px;
        line-height: 128.5%;
    }

    .contact-image-cont {
        height: 381px;
    }

    .contact-image {
        width: 100%;
    }

    .contact-body {
        padding: 47px 30px 76px;
        flex-direction: column;
    }

    .contact-body-form {
        margin-right: 0;
        margin-bottom: 78px;
    }

    .gen-title {
        font-size: 20px;
        line-height: 161%;
    }

    .gen-hl {
        margin: 34px 0;
    }

    .contact-body-information {
        width: 100%;
        max-width: 391px
    }

    .contact-address {
        font-size: 18px;
        line-height: 30px;
    }

    .contact-connect-title {
        font-size: 20px;
        line-height: 187.7%;
    }
}
</style>
