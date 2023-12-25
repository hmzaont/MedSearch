from flask import Flask, request, jsonify
import openai


app = Flask(__name__)
apiKey = "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"
openai.api_key = apiKey
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data['message']

    chatbot_response = "merhaba ben chat"    #chatWithChatGPT(user_message)

    return jsonify({'response': chatbot_response})


def chatWithChatGPT(question):
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-0613",
        prompt=question,
        max_tokens=50
    )
    return response.choices[0].text

app.run(port=5000)
