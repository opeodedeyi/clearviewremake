<template>
    <div class="normal-form">
        <label :for="name" class="label">
            {{name}}
        </label>

        <!-- text input -->
        <input 
            v-if="controlType === 'input' && inputType ==='text'" 
            type="text" 
            maxlength="50"
            :name="name" 
            :value="value" 
            @input="$emit('input', $event.target.value) ">
        <!-- email input -->
        <input 
            v-if="controlType === 'input' && inputType ==='email'" 
            type="email" 
            :name="name" 
            :value="value" 
            @input="$emit('input', $event.target.value) ">
        <!-- textarea input -->
        <div class="textarea" v-if="controlType === 'textarea'">
            <textarea  
                :name="name" 
                :value="value"
                @input="$emit('input', $event.target.value) ">
            </textarea>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: "text goes here"
        },
        inputType: {
            type: String,
            required: false,
            default: "text"
        },
        controlType: {
            type: String,
            required: false,
            default: 'input'
        },
        value: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
.label {
    margin-bottom: 15px;
}

.normal-form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    margin-bottom: 30px;
}

.normal-form label {
    font-weight: normal;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    color: var(--color-white);
}

input,
textarea {
    font-family: 'Libre Franklin';
}

.normal-form input {
    font-size: 17px;
    line-height: 150%;
    color: var(--color-dark);
    padding: 10px 16px;
    background-color: var(--color-white);
    border: 0.5px solid var(--color-white);
    border-radius: 5px;
    outline: none;
}

.normal-form .textarea {
    width: 100%;
    font-size: 17px;
    line-height: 150%;
    color: var(--color-dark);
    padding: 10px 16px;
    background-color: var(--color-white);
    border: 0.5px solid var(--color-white);
    border-radius: 5px;
    outline: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

textarea {
    height: 150px;
    width: 100%;
    font-size: 17px;
    line-height: 150%;
    color: var(--color-dark);
    background-color: var(--color-white);
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
}

@media only screen and (max-width: 1080px) {
    .label {
        margin-bottom: 10px;
    }

    .normal-form label {
        font-size: 15px;
        line-height: 187.7%;
    }

    .normal-form input {
        font-size: 15px;
        line-height: 187.7%;
        padding: 12px 16px;
    }

    .normal-form .textarea {
        font-size: 15px;
        line-height: 187.7%;
    }

    textarea {
        font-size: 15px;
        line-height: 187.7%;
    }
}
</style>