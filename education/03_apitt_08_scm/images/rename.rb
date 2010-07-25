#!/usr/bin/env ruby

$KCODE = 'u'
files = `ls -rt スクリーンショット*`

i = 0
files.split("\n").each do |org|
  `mv "#{org}" #{i}.png`
  i+=1
end
