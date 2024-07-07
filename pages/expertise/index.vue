<script setup>
    import { ref, onMounted } from 'vue';
    useHead({
        title: 'Our Expertise / ClearView Research',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'We provide a platform through research and engagement for the voices and experiences of everyday people, who often go unheard, to be heard, respected and recognised',
            }
        ]
    });

    const { $contentfulClient } = useNuxtApp();

    const weSupportWith = ref([
        {id: 1, image: '/svg/aIIcon.svg', title: 'Audience Insight', content:"Want to better understand a community or a group of people you do not know too well? We can help you do just that!"},
        {id: 5, image: '/svg/m&eIcon.svg', title: 'Monitoring & Evaluation', content:"You ever wondered how much of an impact your service / programme / intervention is making on your intended beneficiaries? No need to look further, we can support you to figure out this and even more."},
        {id: 3, image: '/svg/c&mIcon.svg', title: 'Communications & Marketing', content:"We have all seen how costly it can be for brands who get communication or campaigns wrong, so we understand the importance of communicating effectively with audiences. We can share our expertise with you and culturally-sensitive insights to execute bold campaigns that cut through and land well with people from the communities we specialise in."},
        {id: 2, image: '/svg/aIcon.svg', title: 'Advisory', content:"If you are seeking a critical friend to support you in developing your current and future strategies then you’ve found the right agency."},
        {id: 4, image: '/svg/lPIcon.svg', title: 'Learning Partner', content:"Collaboration is a key part of our organisation’s success and we are committed to working in partnership with funders and influential organisations to solve pressing issues in our society."},
        {id: 6, image: '/svg/sPIcon.svg', title: 'Strategic Planning', content:"Crush your business goals with our actionable strategies based on both evidence-based and culturally-relevant insights (plus a sprinkle of creative imagination)"},
    ]);

    const weknow = ([
        {id: 1, content:"Public health & community engagement"},
        {id: 2, content:"Peer & community research"},
        {id: 3, content:"Children and young people"},
        {id: 4, content:"Students"},
        {id: 5, content:"People facing hardships and multiple challenges"},
        {id: 6, content:"Diverse consumers (and their habits)"},
        {id: 7, content:"People with protected characteristics"},
        {id: 8, content:"Black, Asian and minority groups"},
        {id: 9, content:"Monitoring & evaluation"},
    ]);
    const team = ref(null);
    const teamMember = ref(null);
    const showPopup = ref(false);
    
    async function getAllTeamMembers(limit = 200, skip = 0) {
        const response = await $contentfulClient.getEntries({
            content_type: 'team',
            order: 'fields.id',
            limit,
            skip
        });
        
        const mappedTeam = response.items.map((item) => {
            const { createdAt } = item.sys;
            const { id, fullName, role, bio, linkedin } = item.fields;
            const displayPicture = item.fields.displayPicture.fields.file.url;
            return {
                id, fullName, role, bio, linkedin, displayPicture, createdAt
            };
        });
        team.value = mappedTeam;
    }

    function showMember(ind) {
        teamMember.value = ind;
        showPopup.value = true;
        console.log("popup shown");
    }

    function closeTeamPopup() {
        showPopup.value = false;
    }

    onMounted(() => {
        getAllTeamMembers();
    });
</script>

<template>
    <div class="expertise">
        <div class="expertise-title">
            <h4 class="expertise-title-intro">We provide a platform through research and engagement for the voices and experiences of everyday people, who often go unheard, to be heard, respected and recognised.</h4>
            <div class="expertise-title-sub">
                <div class="expertise-title-hl"></div>
                <p class="expertise-title-explain">Our truly culturally-diverse and experienced team allows us to connect with people from diverse communities in ways that many can’t.</p>
            </div>
        </div>
        <div class="expertise-image"></div>

        <div class="expertise-numbers">
            <div class="numbers-header"><p class="numbers-title">IN THE PAST 6 MONTHS</p><div class="numbers-hl"></div></div>
                <p class="numbers-text">Our research has taken us around the world where we’ve had over 1000 conversations with a diverse mix of communities</p>
            <div class="numbers-hl2"></div>
        </div>

        <div class="expertise-weknow">
            <p class="expertise-weknow-title">We know a lot about</p>
            <div class="expertise-weknow-cards">
                <div class="expertise-weknow-card" v-for="(result, index) in weknow" :key="index">
                    <p class="weknow-card-cont">{{ result.content }}</p>
                </div>
            </div>
        </div>

        <div class="expertise-support">
            <p class="expertise-support-title">We can support you with</p>
            <div class="expertise-support-cards">
                <div class="expertise-support-card" v-for="(result, index) in weSupportWith" :key="index">
                    <img :src="result.image" alt="">
                    
                    <p class="support-card-title">{{ result.title }}</p>
                    <p class="support-card-content">{{ result.content }}</p>
                </div>
            </div>
        </div>

        <div class="expertise-team">
            <p class="expertise-team-title">Our Team</p>
            <div class="team-cards">
                <div class="member-card" v-for="(member, index) in team" :key="index">
                    <div class="member-picture">
                        <NuxtImg :src="member.displayPicture" format="webp" sizes="sm:300px md:400px lg:600px" alt="ima" class="imgg"/>
                        <img src="@/assets/svg/plus.svg" alt="ima" class="plus" @click="showMember(index)"/>
                    </div>
                    <div class="member-content">
                        <p class="member-name">{{member.fullName}}</p>
                        <p class="member-role">{{member.role}}</p>
                    </div>
                </div>
            </div>
        </div>
        <UtilityTeamPopup v-if="showPopup" @close-popup="closeTeamPopup" :fullname="team[teamMember].fullName" :role="team[teamMember].role" :bio="team[teamMember].bio" :linkedin="team[teamMember].linkedin"></UtilityTeamPopup>
    </div>
</template>

<style scoped>
.expertise {
    margin-top: 138px;
}

.expertise-title-hl {
    width: 100%;
    height: 1px;
    background-color: var(--color-danger);
    margin-bottom: 31px;
    margin-top: 50px;
}

.expertise-title {
    padding: 73px 213px 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.expertise-title-intro {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 145%;
    flex: 1;
    margin-right: 80px;
}

.expertise-title-sub {
    width: 363px;
}

.expertise-title-explain {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
}

.expertise-image {
    background-image: url('/images/expertise.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 511px;
    width: 100%;
}

/* numbers */
.expertise-numbers {
  padding: 100px 150px 0;
  background-color: var(--color-gray);
}

.numbers-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.numbers-title {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 193.7%;
  letter-spacing: 0.075em;
  color: var(--color-danger);
  margin-right: 26px;
  margin-bottom: 0;
}

.numbers-hl {
  flex: 1;
  height: 1px;
  background-color: var(--color-danger);
}

.numbers-hl2 {
  width: 100%;
  height: 1px;
  background-color: var(--color-danger);
}

.numbers-text {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 156%;
    margin-top: 45px;
    margin-bottom: 45px;
}

/* weknow */
.expertise-weknow {
    padding: 83px 150px 0;
    background: var(--color-gray);
}

.expertise-weknow-title {
    color: var(--color-dark);
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 227.7%;
    margin-bottom: 40px;
}

.expertise-weknow-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 50px 43px;
}

.expertise-weknow-card {
    grid-column: span 4;
    background-color: var(--color-white);
    border-radius: 10px;
    height: 150px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.weknow-card-cont {
    color: var(--color-dark);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 139.2%;
    text-align: center;
}

/* support */
.expertise-support {
    padding: 60px 150px 107px;
    background: var(--color-gray);
}

.expertise-support-title {
    color: var(--color-dark);
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 227.7%;
    margin-bottom: 30px;
}

.expertise-support-cards {
    width: 100%;
}

.expertise-support-card {
    background-color: var(--color-white);
    width: 100%;
    border-radius: 10px;
    padding: 62px 90px 62px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 10% 25% 55%;
    gap: 5%;
}

.expertise-support-card:last-of-type {
    margin-bottom: 0;
}

.expertise-support-card img {
    max-height: 57px;
    max-width: 67px;
}

.support-card-title {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 143.2%;
    color: var(--color-company);
}

.support-card-content {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 166.5%;
    color: var(--color-dark);
}

/* expertise team */
.expertise-team {
    padding: 106px 150px 127px;
    background: var(--color-company);
}

.expertise-team-title {
    color: var(--color-white);
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 46px;
    margin-bottom: 65px;
}

.team-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 60px 43px;
}

.member-card {
    grid-column: span 4;
}

.member-picture {
    height: 370px;
    width: 100%;
    position: relative;
}

.member-picture .imgg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.member-picture .plus {
    cursor: pointer;
    position: absolute;
    bottom: 25px;
    right: 25px;
    z-index: 1;
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 100%;
}

.member-content {
    padding: 30px 0 0;
}

.member-content p {
    color: var(--color-white);
}

.member-name {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 143.2%;
    margin-bottom: 15px;
}

.member-role {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
}

@media only screen and (min-width: 1660px) {
    .member-card {
        grid-column: span 3;
    }
}

@media only screen and (max-width: 1350px) {
    .expertise-title {
        padding: 73px 120px 100px;
    }
}

/* important screen */
@media only screen and (max-width: 1080px) {
    .expertise {
        margin-top: 110px;
    }

    .expertise-title {
        padding: 53px 30px 70px;
        flex-direction: column;
    }

    .expertise-title-intro {
        font-size: 30px;
        line-height: 156.5%;
        margin-right: 0;
    }

    .expertise-title-sub {
        width: 100%;
    }

    .expertise-title-hl {
        margin-bottom: 26px;
        margin-top: 44px;
    }

    .expertise-title-explain {
        font-size: 15px;
        line-height: 227.7%;
    }

    /* numbers */
    .expertise-numbers {
        padding: 59px 30px 0;
    }

    .numbers-header {
        flex-direction: column;
        display: block;
    }

    .numbers-title {
        font-size: 12px;
        line-height: 193.7%;
        margin-right: 0;
        margin-bottom: 24px;
        text-align: center;
    }

    .numbers-hl {
        width: 100%;
        height: 1px;
    }

    .numbers-text {
        font-family: 'Questrial';
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 156.5%;
        text-align: center;
    }

    /* weknow */
    .expertise-weknow {
        padding: 53px 30px 0;
    }

    .expertise-weknow-title {
        font-size: 25px;
        line-height: 227.7%;
        margin-bottom: 30px;
        text-align: center;
    }

    .expertise-weknow-card {
        grid-column: span 6;
        height: 100px;
    }

    .weknow-card-cont {
        font-size: 15px;
        line-height: 166.5%;
    }

    /* support */
    .expertise-support {
        padding: 70px 30px 84px;
        background: var(--color-gray);
    }

    .expertise-support-card {
        padding: 62px 80px;
        grid-template-columns: 10% 25% 55%;
        gap: 5%;
    }

    .expertise-support-title {
        font-size: 25px;
        line-height: 227.7%;
        text-align: center;
    }

    .expertise-support-card img {
        max-height: 57px;
        max-width: 67px;
    }

    .support-card-title {
        font-size: 18px;
        line-height: 143.2%;
        /* margin-left: 90px; 95px */
        margin-top: 0;
    }

    .support-card-content {
        font-size: 15px;
        line-height: 166.5%;
        /* margin-left: 100px; 125px */
        margin-top: 0;
    }

    /* team */
    .expertise-team {
        padding: 40px 30px 101px;
    }

    .expertise-team-title {
        font-size: 25px;
        line-height: 26px;
        margin-bottom: 25px;
    }

    .team-cards {
        gap: 45px 40px;
    }

    .member-card {
        /* width: 290px; */
        grid-column: span 4;
    }

    .member-picture {
        height: 313px;
    }

    .member-content {
        padding: 25px 0 0;
    }

    .member-name {
        font-size: 22px;
        line-height: 23px;
        margin-bottom: 13px;
    }

    .member-role {
        font-size: 15px;
        line-height: 15px;
    }
}

@media only screen and (max-width: 850px) {
    /* ignore media querry until needed */
    .expertise-support-card {
        background-color: var(--color-white);
        width: 100%;
        border-radius: 10px;
        display: flex;
        flex-wrap: nowrap;
        padding: 38px 35px 45px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        margin-bottom: 25px;
        gap: 40px;
    }

    .expertise-support-card img {
        max-height: 57px;
        max-width: 67px;
    }

    .support-card-title {
        font-style: normal;
        font-weight: 600;
        color: var(--color-company);
        font-size: 18px;
        line-height: 143.2%;
        margin-left: 0;
        /* margin-top: 60px; */
    }

    .support-card-content {
        font-style: normal;
        font-weight: normal;
        color: var(--color-dark);
        font-size: 15px;
        line-height: 166.5%;
        margin-left: 0;
        /* margin-top: 23px; */
    }

    /* team */
    .team-cards {
        gap: 45px 40px;
    }

    .member-card {
        grid-column: span 6;
    }
}

@media only screen and (max-width: 600px) {
    .expertise-image {
        height: 381px;
        background-image: url('images/expertise-mobile.png');
    }

    .member-card {
        width: 100%;
    }

    .member-picture {
        height: 380px;
    }

    /* weknow */
    .expertise-weknow-cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, minmax(auto, 200px));
        gap: 20px;
    }

    /* team */
    .team-cards {
        gap: 45px 40px;
        grid-template-columns: repeat(6, minmax(auto, 200px));
    }

    /* .member-card {
        grid-column: span 6;
    } */
}
</style>
