from flask import Flask, render_template, redirect, url_for, request ,session,jsonify,json
# import gpt_2_simple as gpt2
import os


#Define the app
app = Flask(__name__)
app.config['DEBUG'] = True

#App_ROUTE
@app.route('/', methods=['POST','GET'])
def main():

	return render_template('home.html')

@app.route('/getStory',methods=['POST','GET']) 
def getStory():
    if request.method == 'POST':
         data = request.get_json()
         cat=data['heros']
         text=data['secondText']

    if text == null:
    text="spiderman"      

    sess = gpt2.start_tf_sess()
    gpt2.load_gpt2(sess, run_name = 'run2')  

    story=gpt2.generate(sess,
          prefix=text,
          length=500,
          temperature=0.8,
          top_p=0.9,
          nsamples=5,
          batch_size=5
          )

    print(story)
    return jsonify("Story")  



if __name__ == '__main__':
    app.run()



	
