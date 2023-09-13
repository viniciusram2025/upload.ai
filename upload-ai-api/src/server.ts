import { fastify } from 'fastify';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploardVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploardVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
    port: 3333,
}).then(()=> {
    console.log('HTTP server Running')
})