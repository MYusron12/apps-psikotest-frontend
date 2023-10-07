<template>
  <div class="container">
    <div class="card">
      <h5 class="card-header">DISC Test</h5>
      <div class="card-body">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="card col col-lg-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Nama : auth.user.name</li>
              <li class="list-group-item">Usia : </li>
              <li class="list-group-item">Jenis Kelamin : </li>
              <li class="list-group-item">Tanggal Test : </li>
              <li class="list-group-item">
                <button class="btn btn-primary"
                  @click="submit()">
                  submit
                </button>
              </li>
            </ul>
          </div>
          <p class="card-title col col-lg-8">
            <strong>INSTRUKSI</strong>
             : Setiap nomor di bawah ini memuat 4 
             (empat) kalimat. Tugas anda adalah : 
            <br>1. Beri tanda [x] pada kolom di bawah huruf  
            <strong>[P]</strong> di samping kalimat yang 
            <strong>PALING menggambarkan diri anda</strong>
            <br>2. Beri tanda [x] pada kolom di bawah huruf  
            <strong>[K]</strong> di samping kalimat yang 
            <strong>PALING TIDAK menggambarkan diri anda</strong>
            <br><span class="text-danger">
              <strong>PERHATIKAN : Setiap nomor hanya ada 1 (satu) 
                tanda [x] di bawah masing-masing kolom P dan K.
              </strong></span>
              <br><small class="text-primary">Jika sudah terisi semua, 
                tekan <span class="badge bg-primary">submit</span> 
                untuk mengirim jawaban</small>
            </p>
        </div>
        <pre>
          {{answer_1}}
          {{answer_2}}
          {{answer_3}}
        </pre>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div class="col">
            <div class="card shadow">
              <div class="card-body">
                <table class="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">P</th>
                      <th scope="col">K</th>
                      <th scope="col">Gambaran Diri</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" rowspan="4">1</th>
                      <td><input type="radio" name="desc_1" v-model="answer_1.describe_personality" value="1"></td>
                      <td><input type="radio" name="notdesc_1" v-model="answer_1.not_describe_personality" value="1"></td>
                      <td>
                        abc
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_1" v-model="answer_1.describe_personality" value="2"></td>
                      <td><input type="radio" name="notdesc_1" v-model="answer_1.not_describe_personality" value="2"></td>
                      <td>
                        def
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_1" v-model="answer_1.describe_personality" value="3"></td>
                      <td><input type="radio" name="notdesc_1" v-model="answer_1.not_describe_personality" value="3"></td>
                      <td>
                        ghi
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_1" v-model="answer_1.describe_personality" value="4"></td>
                      <td><input type="radio" name="notdesc_1" v-model="answer_1.not_describe_personality" value="4"></td>
                      <td>
                        jkl
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>            
            </div>
          </div>
          <div class="col">
            <div class="card shadow">
              <div class="card-body">
                <table class="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">P</th>
                      <th scope="col">K</th>
                      <th scope="col">Gambaran Diri</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" rowspan="4">2</th>
                      <td><input type="radio" name="desc_2" v-model="answer_2.describe_personality" value="1"></td>
                      <td><input type="radio" name="notdesc_2" v-model="answer_2.not_describe_personality" value="1"></td>
                      <td>
                        abcdsds
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_2" v-model="answer_2.describe_personality" value="2"></td>
                      <td><input type="radio" name="notdesc_2" v-model="answer_2.not_describe_personality" value="2"></td>
                      <td>
                        defqweqweq
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_2" v-model="answer_2.describe_personality" value="3"></td>
                      <td><input type="radio" name="notdesc_2" v-model="answer_2.not_describe_personality" value="3"></td>
                      <td>
                        ghiwqeqw
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_2" v-model="answer_2.describe_personality" value="4"></td>
                      <td><input type="radio" name="notdesc_2" v-model="answer_2.not_describe_personality" value="4"></td>
                      <td>
                        jklxcvx
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>            
            </div>
          </div>
          <div class="col">
            <div class="card shadow">
              <div class="card-body">
                <table class="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">P</th>
                      <th scope="col">K</th>
                      <th scope="col">Gambaran Diri</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" rowspan="4">3</th>
                      <td><input type="radio" name="desc_3" v-model="answer_3.describe_personality" value="1"></td>
                      <td><input type="radio" name="notdesc_3" v-model="answer_3.not_describe_personality" value="1"></td>
                      <td>
                        abclklkl
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_3" v-model="answer_3.describe_personality" value="2"></td>
                      <td><input type="radio" name="notdesc_3" v-model="answer_3.not_describe_personality" value="2"></td>
                      <td>
                        defioioiwe23
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_3" v-model="answer_3.describe_personality" value="3"></td>
                      <td><input type="radio" name="notdesc_3" v-model="answer_3.not_describe_personality" value="3"></td>
                      <td>
                        ghihjgjehre
                      </td>
                    </tr>
                    <tr>
                      <td><input type="radio" name="desc_3" v-model="answer_3.describe_personality" value="4"></td>
                      <td><input type="radio" name="notdesc_3" v-model="answer_3.not_describe_personality" value="4"></td>
                      <td>
                        jkljgsjdfhalkslad
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {useAuthStore} from '../../stores/auth'
  export default{
    data() {
      return {
        question_test: [],
        answer_1: {
          squence: '',
          describe_personality: '',
          not_describe_personality: ''
        },
        answer_2: {
          squence: '',
          describe_personality: '',
          not_describe_personality: ''
        },
        answer_3: {
          squence: '',
          describe_personality: '',
          not_describe_personality: ''
        },
      }
    },
    mounted() {
      this.questionTest()
    },
    methods: {
      questionTest(){
        this.$axios.get('/disc-question-test')
        .then(ress => this.question_test = ress.data.data)
        .catch(err => console.log(err))
      },
      submit(){
        const answer = {
          answer_1: this.answer_1,
          answer_2: this.answer_2,
          answer_3: this.answer_3,
        }
        this.$axios.post('/disc-answer', {answer})
        .then(ress => console.log(ress))
        .catch(err => console.log(err))
      }
    },
    setup() {
      const auth = useAuthStore()
      window.stores = { auth }
      return {
        auth
      }
    },
  }
</script>