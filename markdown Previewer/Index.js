const initialState = `


  
This is paragraph

**This is bolded text**

> Block Quotes!

# heading

## heading 2 


-  list 1

-  list 2
 
-  list 3

[Visit Website](https://www.freecodecamp.org/)
 
This is a block of code 
\`\`\`
let a = 0;
let b = 1;
let c = a+b;
\`\`\`
This is inline code
\`<div></div>\`
![React](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvpZLwiPTpjIGEEqa-49E6j6g8FZuXAqDH2wc8KAl1g&s)
`;


class App extends React.Component {
    state = {
        text: initialState
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        const { text } = this.state;

        const markdown = marked(text, {breaks: true });
        return (
            <div className="text-center m-4" >
                <h1 className="p-4">My Markdown Previewer</h1>
                <div className="row">
                    <div className="col-6">
                        <h3>Editor</h3>
                        <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="col-6"   >
                        <h3>Previewer</h3>
                        <div className="preview rounded" dangerouslySetInnerHTML={{ __html: markdown }} id="preview"/>


                    </div>
                </div>

            </div>

        );
    }
    


}

ReactDOM.render(<App />, document.getElementById('app'));
