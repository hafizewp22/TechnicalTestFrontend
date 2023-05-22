import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nilaiMahasiswa: {},
    };
  }

  handleNilaiChange = (event, mahasiswa, aspek) => {
    const { nilaiMahasiswa } = this.state;
    const nilai = event.target.value;

    this.setState({
      nilaiMahasiswa: {
        ...nilaiMahasiswa,
        [aspek]: {
          ...nilaiMahasiswa[aspek],
          [mahasiswa]: nilai,
        },
      },
    });
  };

  handleSimpanClick = () => {
    const { nilaiMahasiswa } = this.state;
    const jsonOutput = JSON.stringify(nilaiMahasiswa, null, 2);
    console.log(jsonOutput);
  };

  renderNilaiInput = (mahasiswa, aspek) => {
    return (
      <input
        type="number"
        min="1"
        max="10"
        onChange={(event) => this.handleNilaiChange(event, mahasiswa, aspek)}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className='center'>Aplikasi Penilaian Mahasiswa</h1>
        <table className='center_table'>
          <thead>
            <tr className='center'>
              <td></td>
              <td>Aspek Penilaian 1</td>
              <td>Aspek Penilaian 2</td>
              <td>Aspek Penilaian 3</td>
              <td>Aspek Penilaian 4</td>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => {
              const mahasiswa = `Mahasiswa ${index + 1}`;
              return (
                <tr key={index}>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="account"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path></svg>
                    {mahasiswa}
                  </td>
                  <td className='center'>{this.renderNilaiInput(mahasiswa, 'aspek_penilaian_1')}</td>
                  <td className='center'>{this.renderNilaiInput(mahasiswa, 'aspek_penilaian_2')}</td>
                  <td className='center'>{this.renderNilaiInput(mahasiswa, 'aspek_penilaian_3')}</td>
                  <td className='center'>{this.renderNilaiInput(mahasiswa, 'aspek_penilaian_4')}</td>
                </tr>
              );
            })}
          </tbody>
          <button className='center' onClick={this.handleSimpanClick}>Simpan</button>
        </table>
      </div>
    );
  }
}

export default App;