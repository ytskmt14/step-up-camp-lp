<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on">プライバシーポリシー</a>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title></v-toolbar-title>
        </v-toolbar>
        <div style="margin:0 auto;max-width:800px">
          <span><br /><br /></span>
          <span class="text-h4 pt-4">プライバシーポリシー<br /></span>
          <span><br /></span>
          <span>ステップアップキャンプ（以下、「ステキャン」）は、各種法的サービスのご提供にあたり、お客様の個人情報をお預かりしております。<br /></span>
          <span>ステキャンは、法律を取り扱う国家資格者の事務所として個人情報を保護し、お客様に更なる信頼性と安心感をご提供できるように努めて参ります。<br /></span>
          <span>ステキャンは、個人情報に関する法令を遵守し、個人情報の適切な取り扱いを実現致します。<br /></span>
          <span><br /><br /></span>
          <span class="text-h6">１．個人情報の取得について<br /><br /></span>
          <span>ステキャンは、偽りその他不正の手段によらず適正に個人情報を取得致します。<br /></span>
          <span><br /><br /></span>
          <span class="text-h6">２．個人情報の利用について<br /><br /></span>
          <span>ステキャンは、個人情報を以下の利用目的の達成に必要な範囲内で、利用致します。<br /></span>
          <span>以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行ないます。<br /></span>
          <span>（１） ご依頼・ご相談に対する回答及び資料送付 <br /></span>
          <span><br /><br /></span>
          <span class="text-h6">３．個人情報の安全管理について<br /><br /></span>
          <span>ステキャンは、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。<br /></span>
          <span><br /><br /></span>
          <span class="text-h6">４．個人情報の委託について<br /><br /></span>
          <span>ステキャンは、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう当該第三者に対する必要かつ適切な監督を行います。<br /></span>
          <span>また、コンサルティング、プライバシーマーク申請、ＩＳＭＳ申請業務におきまして第三者と共同して業務を遂行する場合に個人情報の取り扱いを委託する場合があります。<br /></span>
          <span><br /><br /></span>
          <span class="text-h6">５．個人情報の第三者提供について <br /><br /></span>
          <span>ステキャンは、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供致しません。<br /></span>
          <span><br /><br /></span>
          <span class="text-h6">６．個人情報の開示・訂正等について<br /><br /></span>
          <span>ステキャンは、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。<br /></span>
          <span>その際、ご本人であることが確認できない場合には、開示に応じません。<br /></span>
          <span><br /></span>
          <span>個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。<br /></span>
          <span>その際、ご本人であることが確認できない場合には、これらの請求に応じません。<br /></span>
          <span>ステキャンの個人情報の取り扱いにつきまして、上記の請求・お問い合わせ等ございましたら、お問い合わせフォームにてご連絡くださいますようお願い申し上げます。<br /></span>
          <span><br /><br /></span>
          <span class="text-h6">７．本方針の変更<br /><br /></span>
          <span>本方針の内容は変更されることがあります。 変更後の本方針については、ステキャンが別途定める場合を除いて、当サイトに掲載した時から効力を生じるものとします。<br /><br /></span>
        </div>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
