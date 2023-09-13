<script setup>
useHead({
    title: 'Cookie Policy / ClearView Research',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Our Cookie Policy',
        }
    ]
})
</script>

<template>
    <div class="policy">
        <div class="policy-header">
            <h1 class="policy-title">Cookie Policy</h1>
        </div>
        <div class="policy-body">
            <p><b>What are cookies and what do they do?</b></p>
            <p>Cookies are text files that are placed on websites on the internet. Each cookie includes the name of the website and a unique ID. We use cookies on this website.</p>
            <p>Cookies track things like how long a visitor spends on our website and what visitors do on our website (which pages they visit and which buttons they click on, for example). Cookies collect this information and share it with us, the website owner.</p>
            <p>Cookies help us understand who uses our website and how we can improve it. For instance, we can understand which pages of our website are most popular with certain kinds of visitors. This allows us to understand what visitors like about our website and how we can make it more attractive for other visitors.</p>
            
            <p><b>How do we use cookies?</b><br>
            As we set out above, we use cookies on the ClearView Research website. Cookies help us to understand how our users interact with our website.</p>
            <p>Most of the cookies we use on our website are 'persistent' cookies. This means that they remain on your device until you erase them or they expire. The rest of these cookies are 'session' based which are more temporary in duration. This means they will be erased when you close your internet browser.</p>

            <p><u>We use the following types of cookies:</u><br>
            <b>Necessary cookies</b><br>
            Necessary cookies are placed on our website by default. You can turn off these cookies on your device if you don't want us to use necessary cookies but it might impact your ability to browse our website. We need necessary cookies to help us to run our website, and to help us detect any problems with it. For example, we use a cookie that tells us how busy the server is based on the number of visitors and that tells us if any users experience problems so that we can resolve the problems as soon as possible.</p>
            <p>We also use cookies to remember our users while they are browsing our website, its pages, links and subdomains. For example,  we use necessary cookies that tracks your cookie privacy preferences so that we do not place analytics cookies, which we'll talk about below, if you don't want us to. This particular type of cookie will remain on your device even after you've stopped browsing the website so we can make sure we comply with our legal and regulatory obligations.</p>

            <p><b>Analytics cookies</b><br>
            These allow us to recognise and count the number of visitors to our website, and see how visitors browse our website, so we can understand how our website content is performing and improve it where necessary. We use third party cookies for this purpose and we've explained in the table below the specific cookies we use.</p>
            <p>Please see the section below for more detail about which advertising and analytics cookies we use and why.</p>

            <p><b>What cookies do we use</b><br>
            This is the advertising and analytics cookie we use on our website and the purposes for which we use them:</p>

            <p><b>Google Analytics</b><br>
            Allows us to see how many users are on the ClearView Research website and which pages they are visiting.</p>

            <p><b>Can I change my preferences?</b><br>
            <b>Yes.</b> You can also manage your preferences by changing your browser settings on your device to refuse the use of all or some cookies. However, if you block all cookies (including necessary cookies), you may not be able to use all or some parts of our website. You may also find that you are shown information on our website that is less interesting to you.</p>
            <p>Please note, other organisations, such as advertising networks, may also use cookies to track you across different websites. We have no control over these cookies.</p>

            <p><b>We'll let you know if we change what cookies we use</b><br>
            If we change the cookies we use, we will update this Cookies Policy. You always can find the latest version of this Policy on our website.</p>

            <p><b>How to contact us and exercise your rights</b><br>
            If you have any queries concerning this policy, our website or our research, or would like to make a subject access request, please contact us.</p>
            
            <p>We will do our best to assist with any queries you have about your personal data.  You can contact our Data Protection Officer at any time using the contact details below.  When you do so, please provide your full name, your preferred contact information, and a summary of your query.</p>
            
            <p>Burphy Momponga Zumu<br>
            ClearView Research Limited<br>
            86-90 Paul Street<br>
            Shoreditch<br>
            London<br>
            EC2A 4NE<br>
            burphy@clearviewresearch.co.uk</p>
            
            <p>If you have concerns regarding how your personal information has been processed by CVR you can make a complaint to the Information Commissioners Office (ICO) via the following options:</p>
            
            <p>Website: https://ico.org.uk/concerns Telephone helpline: 0303 123 1113</p>
            
            <p>Our policy may be updated periodically and the latest version will always be available here on the CVR website.</p>
            
            <p>CVR Privacy Policy last updated 15/05/18.</p>
        </div>
    </div>
</template>

<style scoped>
.policy {
    margin-top: 138px;
    width: 100%;
}

.policy-header {
    width: 100%;
    padding: 16px 78px 94px;
}

.policy-title {
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.policy-date {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    margin-top: 5px;
}

.policy-body {
    padding: 72px 200px;
    background: var(--color-white);
}

.policy-body p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    color: var(--color-dark);
    padding: 20px 0;
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .desk {
        display: none;
    }

    .policy {
        margin-top: 110px;
        width: 100%;
    }

    .policy-header {
        padding: 40px 30px 60px;
    }

    .policy-title {
        font-size: 45px;
        line-height: 128.5%;
    }

    .policy-date {
        font-size: 15px;
        line-height: 227.7%;
    }

    .policy-body {
        padding: 59px 30px;
    }

    .policy-body p {
        font-size: 12px;
        line-height: 227.7%;
        padding: 12px 0;
    }

    .align-right {
        text-align: right;
    }
}
</style>
