### Jelaskan apa yang kalian tahu mengenai Database, berikan contoh 5 query yang kalian tau. Jelaskan apa yang di maksud dengan Framwork, lalu apa perbedannya Framework dengan Library, dan berikan 7 contoh Framework Javascript yang kalian tahu. Jelaskan perbedaan antara FrontEnd dan Backend menurut pendapat kalian.

#### jawaban :

- Jelaskan apa yang kalian tahu mengenai Database, berikan contoh 5 query yang kalian tau.

    ```
        database adalah sekumpulan data yang disimpan secara sistematis di dalam komputer yang dapat diolah atau dimanipulasi untuk menghasilkan informasi.

        contoh query : 
        
        - select * from user -> untuk menampilkan semua data yang ada di tabel tersebut
        - insert into user values (1, 'faqih', 'tega') -> untuk memasukan data ke table
        - delete from user where id = 1 -> untuk menghapus data dari tabel
        - select * from user join dosen on user.dsn_wali = dosen.id -> untuk mengabungkan 2 buah tabel
        - select * from user where nama like = '%a%' -> untuk mencari nama yang mengansung huruf a
    ```

- Jelaskan apa yang di maksud dengan Framwork, lalu apa perbedannya Framework dengan Library, dan berikan 7 contoh Framework Javascript yang kalian tahu

    ```
        Framework adalah sebuah kerangka yang dibuat untuk mempermudah develper dalam membuat aplikasi

        perbedaan Framework dan Library : 
            - Framework ialah sekumpulan kode berbahasa JavaScript yang bisa digunakan oleh siapa pun untuk membangun situs atau lainnya
            - Library merupakan potongan kode alias code snippets yang bisa digunakan oleh siapa pun.

        contoh 7 Framework javascript : 
        
        - vuejs (FE)
        - angularjs (FE)
        - nextjs (FE)
        - express (BE)
        - meteor js (BE)
        - gatsby js (FE)
        - nuxtjs (FE)
    ```

- Jelaskan perbedaan antara FrontEnd dan Backend menurut pendapat kalian.

    ```
        FrontEnd adalah bagian yang mengembangkan tampilan dari aplikasi dan mengola data dari Backend
        Backend adalah bagian yang mengola data dari database dan request dari user lalu dikirim ke FrontEnd
    ```