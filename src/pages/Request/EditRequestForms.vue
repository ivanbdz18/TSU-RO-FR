<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Message / Comment:</label>
              <md-textarea v-model="message"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field>
              <label for="form">Form Type</label>
              <md-select v-model="forms" name="forms" id="forms">
                <md-option value="TSU-URO-SF-01">TSU-URO-SF-01 Capsule Proposal Form</md-option>
                <md-option value="TSU-URO-SF-02">TSU-URO-SF-02 College Research Evaluation Committee Form (STEM)</md-option>
                <md-option value="TSU-URO-SF-03">TSU-URO-SF-03 Researcher’s Profile Form</md-option>
                <md-option value="TSU-URO-SF-04">TSU-URO-SF-04 Request for Incentive of Research Output</md-option>
                <md-option value="TSU-URO-SF-06">TSU-URO-SF-06 Submission of Completed Researches for In-House</md-option>
                <md-option value="TSU-URO-SF-07">TSU-URO-SF-07 Authenticity of Authorship & Commitment to Revise</md-option>
                <md-option value="TSU-URO-SF-11">TSU-URO-SF-11 Research Status Monitoring Form</md-option>
                <md-option value="TSU-URO-SF-16">TSU-URO-SF-16 Turnitin Software Application Form</md-option>
                <md-option value="TSU-URO-SF-19">TSU-URO-SF-19 Request of Fund for Research Related Activity</md-option>
                <md-option value="TSU-URO-SF-24">TSU-URO-SF-24 Research Revision Report</md-option>
                <md-option value="TSU-URO-SF-26">TSU-URO-SF-26 College Research Evaluation Committee Form (SocSci)</md-option>
                <md-option value="TSU-URO-SF-32">TSU-URO-SF-32 Revised Research Capsule Proposal</md-option>
                <md-option value="TSU-URO-SF-33">TSU-URO-SF-33 Checklist of Documents from FR to URO through DRC</md-option>
                <md-option value="TSU-URO-SF-34">TSU-URO-SF-34 Checklist of Documents from DRC to URO</md-option>
                <md-option value="TSU-URO-SF-36">TSU-URO-SF-36 Summary of Evaluators Suggestions and Ratings</md-option>
                <md-option value="TSU-URO-SF-39">TSU-URO-SF-39 Appointment Form</md-option>
                <md-option value="TSU-URO-SF-40">TSU-URO-SF-40 Consultation Report Form</md-option>
                <md-option value="TSU-URO-SF-41">TSU-URO-SF-41 Request for Funding of Paper Publication</md-option>
                <md-option value="TSU-URO-SF-42">TSU-URO-SF-42 Request for Funding of Paper Presentation</md-option>
                <md-option value="TSU-URO-SF-44">TSU-URO-SF-44 Tracer Study Questionnaire</md-option>
                <md-option value="TSU-URO-SF-45">TSU-URO-SF-45 Turnitin Run Request Form</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-60">
            <!-- <md-input type="file" name="datafile" class="md-raised md-success"></md-input> -->
            <md-field>
              <label>Insert File</label>
              <md-file v-model="files" multiple required/>
              </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Send</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'edit-request-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: ''
    }
  }
}

</script>
