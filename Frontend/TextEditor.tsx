import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.css';

interface ReactQuillWrapperProps {
  onChange: (value: string) => void;
}

interface ReactQuillWrapperState {
  text: string;
}

export class ReactQuillWrapper extends Component<ReactQuillWrapperProps, ReactQuillWrapperState> {
  constructor(props: ReactQuillWrapperProps) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['clean'],
      ],
    };

    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
    ];
  }

  handleChange(value: string) {
    this.setState({ text: value });
    this.props.onChange(value); // Call the onChange prop
  }

  render() {
    console.log(this.state.text);
    return (
      <div className='border rounded-lg mt-4'>
        <ReactQuill
          value={this.state.text}
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange}
          className='custom-quill'
        />
      </div>
    );
  }
}