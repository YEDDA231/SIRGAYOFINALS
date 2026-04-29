import requests

API_URL = "https://cloud.flowiseai.com/api/v1/vector/upsert/06b70cbe-3e62-4cf4-8e33-9d74263c3edd"


def query(payload):
    response = requests.post(API_URL, json=payload)
    return response.json()


output = query({
    "docs": [
        {
            "pageContent": "Flowise is a tool for building AI apps using LLMs.",
            "metadata": {
                "source": "manual"
            }
        }
    ]
})

print(output)
