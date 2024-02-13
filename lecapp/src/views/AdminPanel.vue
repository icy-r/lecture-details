<template>
    <!-- admin panel -->
    <div>
        <h2>Lecture Details</h2>
        <div>
            <p>Module Name: {{ moduleName }}</p>
            <p>Module Code: {{ moduleCode }}</p>
            <p>Lecturer Name: {{ lecturerName }}</p>
            <p>Time: {{ lectureTime }}</p>
            <p>Teams Link: <a :href="teamsLink">{{ teamsLink }}</a></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moduleName: "Module Name",
            moduleCode: "Module Code",
            lecturerName: "Lecturer Name",
            lectureTime: "Lecture Time",
            teamsLink: "Teams Link"
        };
    }
};
</script>
