# watson-speech-json

> Convert Watson Speech-To-Text output to JSON using Node.

Note: This is to be paired with node-webvtt or node-srt.

## Tutorial

To create 500 minutes of captions for free:

1. [Create an IBM account](https://cloud.ibm.com)
2. Create an instance of [Watson Speech to text](https://cloud.ibm.com/catalog/services/speech-to-text).
3. Open the [IBM Cloud Shell](https://cloud.ibm.com/shell)
4. Upload your video / audio file to the shell
5.  Read the docs here: https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-gettingStarted#getting-started-tutorial for the api key to type. Make sure to use the right content type (video/mp4, audio/mp3, etc.): `curl -X POST -u "apikey:{apikey}" --header "Content-Type: audio/flac" --data-binary @{path_to_file} "{url}/v1/recognize" > output.json`
6. Run the command
6. Download the file
6. Delete your instance so you don't pay for hours
