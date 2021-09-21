FROM python:3.8-slim-buster

RUN mkdir export
WORKDIR /app


COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . /app
RUN tr -d '\r' < call.sh > callexecute.sh
RUN chmod +x callexecute.sh
CMD [ "/bin/bash", "/app/callexecute.sh" ]

