<template>
    <div id="middle">
        <div class="container">
            <div class="row">
                <div class="col">
                    <textarea class="space" v-model="transcript"></textarea>
                </div>
                <div class="col">
                    <textarea class="space" v-model="summary"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SpeechToText from 'speech-to-text'

export default {
    name: 'middle',
    data: ()=> ({
        summary: '',
        lesson: '',
        listening: '',
        final: '',
        listener: '',
        err: ''
    }),
    created() {
        const onAnythingSaid = text => {
            this.lesson = text
        }
        const onEndEvent = () => {
            if (this.listening) 
                this.startListening()
        }
        const onFinalised = text => {
            this.final = [text, ...this.final];
            this.lesson = '';
        };

        try {
            this.listener = new SpeechToText(onFinalised, onEndEvent, onAnythingSaid);
            } catch (error) {
            this.err = error.message;
        }
    },
    methods: {
        startListening() {
            
        }
    }
}
</script>

<style scoped>
    .space {
        width: 100%;
        height: 100%;
    }
</style>